using System;
using System.Collections.Generic;

namespace LAB_1.Models
{
    public partial class AwardWinner
    {
        public string Id { get; set; } = null!;
        public string? Name { get; set; }
        public string YearWon { get; set; } = null!;
        public string Award { get; set; } = null!;
    }
}
