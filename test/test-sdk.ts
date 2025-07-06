console.log("Bootstrapping test-sdk.ts");
(async () => {
  try {
    const { StreamableHTTPClientTransport } = await import("@modelcontextprotocol/sdk/client/streamableHttp.js");
    const { Client } = await import("@modelcontextprotocol/sdk/client/index.js");
    const transport = new StreamableHTTPClientTransport(
      new URL(`https://server.smithery.ai/@wonderwhy-er/desktop-commander/mcp?api_key=7ccc8402-4d6d-4d76-bd05-e75cbeede425&profile=hidden-chickadee-6S5PBc`)
    );

    const client = new Client({
      name: "Test Client",
      version: "1.0.0"
    });

    await client.connect(transport);
    console.log("Connected to the MCP");

    const result = await client.callTool({
      name: "reverseString",
      arguments: { value: "hello world" }
    });
    console.dir(result, { depth: null });
  } catch (err) {
    if (err instanceof Error) {
      console.error("❌ MCP error:", err.message);
      console.error(err.stack);
    } else {
      console.error("❌ MCP non-standard error:", JSON.stringify(err, null, 2));
    }
  }
})();