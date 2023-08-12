dotnet ef migrations add InitialMigration -o Data/Migrations
dotnet ef database update
dotnet ef database drop
dotnet watch --no-hot-reload