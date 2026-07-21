export const onRequestPost = async (context: { request: Request }) => {
    const { request } = context;
    try {
        const { name, email, note } = (await request.json()) as {
            name?: string; email?: string; note?: string;
        };

        if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email ?? "")) {
            return Response.json({ error: "Name and valid email required." }, { status: 400 });
        }

        console.log("New lead:", { name, email, note, ts: new Date().toISOString() });
        // TODO: forward to email / webhook so you actually receive leads

        return Response.json({ ok: true });
    } catch {
        return Response.json({ error: "Bad request" }, { status: 400 });
    }
};