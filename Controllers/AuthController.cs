using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using web_project.Enums;
using System.Data;
using System.Security.Claims;
using web_project.Objects;
using web_project.Database;
using web_project.Models;

namespace web_project.Controllers
{
    public class AuthController : Controller
    {
        public readonly ApplicationContext db = new ApplicationContext();
        [HttpPost]
        [HttpGet]
        [Route("auth/login")]
        public async Task<AuthInfo> Login([FromBody] AuthInput input)
        {
            if (input.Login == "test" && input.Password == "admin")
            {
                await SetCookies(input.Login, RoleType.Admin);
                return AuthInfo.Success(RoleType.Admin);
            }

            return AuthInfo.Fail();
        }

        [HttpGet]
        [Route("auth/logout")]
        public async Task<AuthInfo> Logout()
        {
            await RemoveCookies();
            return AuthInfo.Fail();
        }

        [HttpGet]
        [Route("auth/getInfo")]
        public AuthInfo GetInfo()
        {
            if (User?.Identity?.IsAuthenticated ?? false)
            {
                string role = User.FindFirstValue(ClaimsIdentity.DefaultRoleClaimType);
                RoleType roleType = Role.FromString(role);
                return AuthInfo.Success(roleType);
            }
 
            return AuthInfo.Fail();
        }

        [HttpPost]
        [Route("questionnaire/{guid}/save")]
        public void SaveQuestionnaire([FromBody] QuestInfo questInfo)
        {
            Questionnaire questionnaire = new Questionnaire()
            {
                Email = questInfo.Email,
                KnownHobbies = questInfo.KnownHobbies,
                DesiredHobbies = questInfo.DesiredHobbies,
                WantChatting = questInfo.WantChatting,
                IsMentor = questInfo.IsMentor,
                WantToBeMentor = questInfo.WantToBeMentor,
                About = questInfo.About,
                UserID = questInfo.UserID
            };
            db.Questionnaires.Add(questionnaire);
            db.SaveChanges();
        }

        private async Task SetCookies(string login, RoleType role)
        {
            var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, login),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, role.ToString())
                };

            ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType,
                ClaimsIdentity.DefaultRoleClaimType);

            await AuthenticationHttpContextExtensions.SignInAsync(HttpContext, new ClaimsPrincipal(id));
        }

        private async Task RemoveCookies()
        {
            await AuthenticationHttpContextExtensions.SignOutAsync(HttpContext);
        }

    }
}
