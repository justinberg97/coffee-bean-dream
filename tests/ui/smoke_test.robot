***Settings***
Library    SeleniumLibrary    timeout=10

***Variables***
${BROWSER}         Chrome
${URL}             http://frontend:80
${SELENIUM_HUB}    http://selenium-chrome:4444/wd/hub

***Test Cases***
Simple Frontend Connectivity Test
    # This test simply verifies that a browser can be opened to the frontend URL
    # via the Selenium Hub and then closed without errors.
    # It acts as a basic check for the entire UI testing setup.
    Open Browser To Home Page
    Log To Console    Frontend should now be visible. Attempting to close browser.
    Close Browser

***Keywords***
Open Browser To Home Page
    # Opens the browser to the specified URL using the Selenium Hub.
    Open Browser    ${URL}    ${BROWSER}    remote_url=${SELENIUM_HUB}
    # Maximizes the browser window for better visibility and consistent testing.
    Maximize Browser Window
    # Pauses for 5 seconds to allow the frontend application to fully load.
    # In a real application, consider using "Wait Until Element Is Visible"
    # or "Wait Until Page Contains" for more robust synchronization.
    Sleep    5s
