console.log("Bootstrapping test-sdk.ts");
(async () => {
  try {
    const { StreamableHTTPClientTransport } = await require("@modelcontextprotocol/sdk/client/streamableHttp.js");
    const { Client } = await require("@modelcontextprotocol/sdk/client/index.js");
    const transport = new StreamableHTTPClientTransport(
      new URL("https://server.sigyl.dev/@kazumah1/mcp-test/mcp?apiKey=sk_779beee465eb6573f8222e5a9aa6fc26da9747580adcecb48fafc5d66b2e6c02")
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