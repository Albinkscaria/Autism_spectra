import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // If no DATABASE_URL is configured, skip the DB check so builds
    // (and deploy-time static analysis) won't fail. The `prisma` import
    // provides a safe no-op proxy when the DB is not configured.
    if (process.env.DATABASE_URL) {
      // Check database connection
      await prisma.$queryRaw`SELECT 1`;
    }
    
    // Check essential environment variables
    const requiredEnvVars = [
      'DATABASE_URL',
      'NEXT_PUBLIC_SUPABASE_URL',
      'NEXT_PUBLIC_SUPABASE_ANON_KEY',
      'SUPABASE_SERVICE_ROLE_KEY',
    ];
    
    const missingEnvVars = requiredEnvVars.filter(
      (envVar) => !process.env[envVar]
    );
    
    if (missingEnvVars.length > 0) {
      return NextResponse.json(
        {
          status: 'unhealthy',
          message: `Missing environment variables: ${missingEnvVars.join(', ')}`,
          timestamp: new Date().toISOString(),
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      status: 'healthy',
      message: 'All systems operational',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '0.1.0',
      environment: process.env.NODE_ENV || 'development',
    });
  } catch (error) {
    console.error('Health check failed:', error);
    
    return NextResponse.json(
      {
        status: 'unhealthy',
        message: 'Database connection failed',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}