# Dockerfile for Golang Web App

# Build Stage
FROM golang:1.20-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy Go module files and download dependencies
COPY go.mod go.sum ./
RUN go mod tidy
RUN go mod download

# Copy source code
COPY . .

# Build the application
RUN go build -o dvwa ./server
# RUN go build -o dvwa ./server/main.go

# Final Stage
FROM debian:stable-slim

# Set working directory
WORKDIR /app

# Copy binary and templates from build stage
COPY --from=build /app/dvwa /app/
COPY --from=build /app/template /app/template

# Expose port for web server
# EXPOSE 8080

# Start application
CMD ["/app/dvwa"]
