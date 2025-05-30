***Settings***
Library    RequestsLibrary    # For making HTTP requests
Library    OperatingSystem    # For interacting with the operating system (e.g., environment variables)
# You might need to install these libraries: pip install robotframework-requests

***Variables***
${BACKEND_URL}    http://localhost:3000/api/coffees # Adjust if your backend runs on a different URL/port in CI

***Test Cases***
Backend API is Accessible
    [Documentation]    Tests if the backend /api/coffees endpoint is accessible and returns a 200 status.
    Create Session    mysession    ${BACKEND_URL}
    ${response}=      Get Request    mysession    /
    Should Be Equal As Strings    ${response.status_code}    200
    Log To Console    Backend API response status: ${response.status_code}
    Log To Console    Backend API response body: ${response.text}