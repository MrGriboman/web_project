using System.Runtime.CompilerServices;
using web_project.Enums;

namespace web_project.Objects
{
    public class AuthInfo
    {
        public static AuthInfo Success(RoleType role)
        {
            return new AuthInfo()
            {
                Role = role,
                Authorized = true
            };
        }

        public static AuthInfo Fail()
        {
            return new AuthInfo()
            {
                Role = RoleType.Unknown,
                Authorized = false
            };
        }

        public bool Authorized { get; private set; }
        public RoleType Role { get; private set; }
    }
}
