using System;
using System.Collections.Generic;

namespace LAB_1.Models
{
    public partial class Game
    {
        public int Id { get; set; }
        public string? Team1 { get; set; }
        public string? Team2 { get; set; }
        public string? Score { get; set; }
        public DateTime? Date { get; set; }
    }
}
