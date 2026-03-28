import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Partner from '@/models/Partner';

// GET all partners
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const active = searchParams.get('active');
    
    const query: any = {};
    if (featured === 'true') query.featured = true;
    if (active !== null) query.active = active === 'true';
    
    const partners = await Partner.find(query).sort({ name: 1 });
    
    return NextResponse.json({ partners }, { status: 200 });
  } catch (error) {
    console.error('Error fetching partners:', error);
    return NextResponse.json(
      { error: 'Failed to fetch partners' },
      { status: 500 }
    );
  }
}

// POST create new partner
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const partner = await Partner.create(body);
    
    return NextResponse.json({ partner }, { status: 201 });
  } catch (error) {
    console.error('Error creating partner:', error);
    return NextResponse.json(
      { error: 'Failed to create partner' },
      { status: 500 }
    );
  }
}
