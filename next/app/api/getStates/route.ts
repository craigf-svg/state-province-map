export async function GET() {
  try {
    const states = [/* your data */]
    return Response.json(states)
  } catch (error) {
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}