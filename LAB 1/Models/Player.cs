using System;
using System.Collections.Generic;

namespace LAB_1.Models
{
    public partial class Player
    {
        public string Id { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public int? Age { get; set; }
        public string? Position { get; set; }
        public string? Team { get; set; }
    }
}
