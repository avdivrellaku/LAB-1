using System;
using System.Collections.Generic;

namespace LAB_1.Models
{
    public partial class Team
    {
        public Team()
        {
            Arenas = new HashSet<Arena>();
        }

        public string Id { get; set; } = null!;
        public string? Name { get; set; }
        public string? Owner { get; set; }
        public string? Coach { get; set; }
        public string? Division { get; set; }
        public string? Conference { get; set; }

        public virtual ICollection<Arena> Arenas { get; set; }
    }
}
