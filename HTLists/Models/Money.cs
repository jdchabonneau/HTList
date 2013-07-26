using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HTLists.Models
{
    public class Money
    {
        public int ID { get; set; }
        public decimal Amount { get; set; }
        public string Descipion { get; set; }
        public DateTime Time { get; set; }
    }
}