using System;
using System.Collections.Generic;

namespace LAB_1.Models
{
    public partial class Game
    {
        public string Id { get; set; } = null!;
        public string Team1 { get; set; } = null!;
        public string Team2 { get; set; } = null!;
        public int? Score1 { get; set; }
        public int? Score2 { get; set; }
        public DateTime? Date { get; set; }

        public virtual Team Team1Navigation { get; set; } = null!;
        public virtual Team Team2Navigation { get; set; } = null!;
    }
}
