FROM python:3.11.1-slim-buster

WORKDIR /app

# Install Robot Framework and SeleniumLibrary
RUN pip install robotframework robotframework-seleniumlibrary selenium

# Set the default command to show Robot Framework version (can be overridden by docker-compose)
CMD ["robot", "--version"]