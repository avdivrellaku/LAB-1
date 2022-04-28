using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LAB_1.Models
{
    public partial class LABCOURSE1Context : DbContext
    {
        public LABCOURSE1Context()
        {
        }

        public LABCOURSE1Context(DbContextOptions<LABCOURSE1Context> options)
            : base(options)
        {
        }

  
        public virtual DbSet<Players> Players { get; set; } = null!;
   

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=LABCOURSE1;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
         

            modelBuilder.Entity<Players>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Position)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Team)
                    .HasMaxLength(50)
                    .IsUnicode(false);

              /*  entity.HasOne(d => d.TeamNavigation)
                    .WithMany(p => p.Players)
                    .HasForeignKey(d => d.Team)
                    .HasConstraintName("FK__Players__Team__34C8D9D1");
              */
            });

        

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
