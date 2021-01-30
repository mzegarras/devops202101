
# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0-alpine
WORKDIR /app
COPY ./publish .
ENTRYPOINT ["dotnet", "SimpleNetCore.dll"]

