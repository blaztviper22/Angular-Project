﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace School_Project.Models
{
    public partial class Roles
    {
        public int Id { get; set; }
        public string Role { get; set; }
        public string Description { get; set; }
    }
}
