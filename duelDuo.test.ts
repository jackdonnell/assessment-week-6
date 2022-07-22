
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking draw btn displays div with id = "choices"', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    const div = await driver.findElement(By.id('choices'))
    expect(drawBtn).toEqual(div)
})

test('Check that clicking an “DUEL!” button displays the div with id = “results”', async () => {
    const duelBtn = await driver.findElement(By.id('duel'))
    const div1 = await driver.findElement(By.id('results'))
    expect(duelBtn).toEqual(div1)
})