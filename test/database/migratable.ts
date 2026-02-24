export function mockLegacyData(data: Record<string, unknown>): timer.backup.ExportData {
    // Simulates pre-v4.0.0 data to test the legacy import path
    const withMeta: timer.backup.ExportData = {
        ...data,
        __meta__: {
            version: "3.8.15",
            ts: Date.now(),
        },
    }
    return withMeta
}
