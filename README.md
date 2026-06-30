# DevOps Health API

A small Dockerized health check API built to demonstrate a production-style DevOps workflow using GitHub Actions.

## Project Overview

This project contains a simple Node.js and Express API with a `/health` endpoint. The application is containerized with Docker and includes an automated CI/CD pipeline that runs tests, builds the Docker image, scans it for vulnerabilities, and publishes the image to GitHub Container Registry.

## What This Project Demonstrates

- Backend health check endpoint
- Automated testing with Jest and Supertest
- Containerization with Docker
- CI/CD pipeline with GitHub Actions
- Docker image vulnerability scanning with Trivy
- Publishing Docker images to GitHub Container Registry

## API Endpoint

### GET /health

Example response:

```json
{
  "status": "ok",
  "service": "devops-health-api",
  "timestamp": "2026-06-28T00:00:00.000Z"
}
