using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace LAB_1.Models
{
    public partial class Arena
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Location { get; set; }
        public string? Team { get; set; }
        public int? Capacity { get; set; }
        public string? ImageName { get; set; }

        [JsonIgnore]
        public virtual Team? TeamNavigation { get; set; } = null!;
    }
}
