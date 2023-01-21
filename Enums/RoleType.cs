namespace web_project.Enums
{
    public enum RoleType
    {
        Unknown = 0,
        Admin = 1,
        User = 2,
    }

    public static class Role
    {
        public static RoleType FromString(string str)
        {
            foreach (RoleType role in Enum.GetValues(typeof(RoleType)))
            {
                if (role.ToString() == str)
                    return role;
            }

            return RoleType.Unknown;
        }
    }
}
