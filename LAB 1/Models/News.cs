using System;
using System.Collections.Generic;

namespace LAB_1.Models
{
    public partial class News
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? SmallDesc { get; set; }
        public string? FullArticle { get; set; }
        public string? DatePublished { get; set; }
        public string? ImageName { get; set; }
    }
}
