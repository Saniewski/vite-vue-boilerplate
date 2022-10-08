import { type PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: 'tests/e2e',
    webServer: {
        command: 'pnpm build && pnpm preview',
        port: 4173
    },
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        video: 'on-first-retry'
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'edge',
            use: { ...devices['Desktop Edge'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        }
    ]
};

export default config;
