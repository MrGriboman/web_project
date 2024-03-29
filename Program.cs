using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using System.Security.Cryptography;
using System.Text;
using web_project.Database;
using web_project.Enums;
using web_project.Models;

var builder = WebApplication.CreateBuilder(args);
var environment = builder.Environment;

// Add services to the container.
var services = builder.Services;

services.AddControllers();

services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "client/build";
});


services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
        .AddCookie(options =>
        {
            options.LoginPath = new Microsoft.AspNetCore.Http.PathString("");
        });

var app = builder.Build();

using (ApplicationContext db = new ApplicationContext())
{    
    if (db.Database.CanConnect())
    {
        var password = "admin";
        byte[] hash;
        using (SHA256 sha = SHA256.Create())
        {
            hash = sha.ComputeHash(Encoding.UTF8.GetBytes(password));
        }
        User admin = new User { Login = "test", Password = hash.ToString(), Role = RoleType.Admin.ToString() };
        db.Users.Add(admin);
        db.SaveChanges();
    }
    
}

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseSpaStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "client";

    if (environment.IsDevelopment())
    {
        spa.UseReactDevelopmentServer(npmScript: "start");
    }
});

app.Run();