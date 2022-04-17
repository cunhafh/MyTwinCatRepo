using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EnvDTE;
using TCatSysManagerLib;
using System.Xml;
using System.Collections;

namespace AIBeckhoff
{
    class Program
    {
        public static ITcSysManager11 sysMan;
        public static EnvDTE.DTE dte;
        public static EnvDTE.Project pro;
        public static EnvDTE.Solution sol;

        static void Main(string[] args)
        {
            /*
             Arguments
                Args[0] = Path to Twincat Solution
                Args[1] = Look up tree item
                Args[2] = Destination to save xml file
            */

            // Create dte objet
            dte = attachToExistingDte(@args[0], "TcXaeShell.DTE.15.0");

            // Attach system manager to DTE solution object
            sol = dte.Solution;
            pro = sol.Projects.Item(1);
            sysMan = (ITcSysManager11)pro.Object;

            // Perform look up
            ITcSmTreeItem item = sysMan.LookupTreeItem(args[1]);

            // Save xml
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(item.ProduceXml());
            doc.Save(args[2]);

        }

        public static EnvDTE.DTE attachToExistingDte(string solutionPath, string progId)
        {
            EnvDTE.DTE dte = null;
            try
            {
                Hashtable dteInstances = Beckhoff_AI.Helper.GetIDEInstances(false, progId);
                IDictionaryEnumerator hashtableEnumerator = dteInstances.GetEnumerator();

                while (hashtableEnumerator.MoveNext())
                {
                    EnvDTE.DTE dteTemp = (EnvDTE.DTE)hashtableEnumerator.Value;
                    if (dteTemp.Solution.FullName == solutionPath)
                    {
                        Console.WriteLine("Found solution in list of all open DTE objects. " + dteTemp.Name);
                        dte = dteTemp;
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return dte;
        }
    }
}
