﻿using System;
using System.Collections.Generic;

namespace LAB_1.Models
{
    public partial class HistoryAssist
    {
        public string Id { get; set; } = null!;
        public int? Nr { get; set; }
        public string? FullName { get; set; }
        public int? Points { get; set; }
        public int? GamesPlayed { get; set; }
        public int? Turnovers { get; set; }
        public string? ImageName { get; set; }
    }
}