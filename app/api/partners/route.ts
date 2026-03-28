import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET all partners
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const active = searchParams.get('active');

    let query = supabase.from('partners').select('*').order('name', { ascending: true });

    if (featured === 'true') {
      query = query.eq('featured', true);
    }

    if (active !== null) {
      query = query.eq('active', active === 'true');
    }

    const { data: partners, error } = await query;

    if (error) {
      throw error;
    }

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
    const body = await request.json();

    const { data: partner, error } = await supabase
      .from('partners')
      .insert([body])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({ partner }, { status: 201 });
  } catch (error) {
    console.error('Error creating partner:', error);
    return NextResponse.json(
      { error: 'Failed to create partner' },
      { status: 500 }
    );
  }
}
