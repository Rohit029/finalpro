using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MajorProject.Migrations
{
    /// <inheritdoc />
    public partial class Second : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TrailerUrl",
                table: "Songs");

            migrationBuilder.RenameColumn(
                name: "TvShowUrl",
                table: "Songs",
                newName: "AudioUrl");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AudioUrl",
                table: "Songs",
                newName: "TvShowUrl");

            migrationBuilder.AddColumn<string>(
                name: "TrailerUrl",
                table: "Songs",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
