using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace School_Project.Models
{
    public partial class Users
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string MobileNo { get; set; }
        public string Gender { get; set; }
        public string Batch { get; set; }
        public int? CourseId { get; set; }
        public string YearLevel { get; set; }
        public int? SemesterId { get; set; }
        public string SchoolYear { get; set; }
        public string IdNo { get; set; }
        public int? RoleId { get; set; }
    }
}
