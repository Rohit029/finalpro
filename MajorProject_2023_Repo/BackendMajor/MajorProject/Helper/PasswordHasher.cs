using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Identity;
using System.Security.Cryptography;

namespace MajorProject.Helper
{
    public static class PasswordHasher 
    {
        public static string HashPassword(string password)
        {
            byte[] salt = new byte[128 / 8];
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(salt);

            string hashedPassword = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password : password,
                salt : salt,
                prf : KeyDerivationPrf.HMACSHA512,
                iterationCount : 10000,
                numBytesRequested : 256 / 8
                ));

            string combinedHash = $"{Convert.ToBase64String(salt)}: {hashedPassword}";
            return combinedHash;
        }

        public static bool VerifyHashedPassword(string hashedPassword, string providedPassword)
        {
            string[] parts = hashedPassword.Split(':');
            if (parts.Length != 2 ) { return false; }

            byte[] salt = Convert.FromBase64String(parts[0]);
            string storedHashedPassword = parts[1].Trim();

            string hashedPasswordToVerify = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: providedPassword,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA512,
                iterationCount: 10000,
                numBytesRequested: 256 / 8
                ));

            return hashedPasswordToVerify.Equals( storedHashedPassword );
        }
    }
}
