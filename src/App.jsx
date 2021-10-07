import "./styles.css";

import { Cards } from "./Components/Cards";
import { Navbar } from "./Components/Navbar";
export default function App() {
  const arr = [
    { name: "tpotter0", age: 35, gender: "Genderfluid", city: "Neftobod" },
    {
      name: "oschonfelder1",
      age: 29,
      gender: "Polygender",
      city: "Luis Donaldo Colosio"
    },
    { name: "olunge2", age: 30, gender: "Agender", city: "Havana" },
    { name: "wvyse3", age: 30, gender: "Bigender", city: "Guaduas" },
    { name: "ucicci4", age: 43, gender: "Genderfluid", city: "Atins" },
    { name: "czanussii5", age: 29, gender: "Female", city: "Tete" },
    { name: "lbradman6", age: 25, gender: "Bigender", city: "Maple Plain" },
    { name: "nrooms7", age: 48, gender: "Bigender", city: "Dassun" },
    { name: "bbenettolo8", age: 7, gender: "Female", city: "Mandaguari" },
    { name: "kramsbotham9", age: 26, gender: "Polygender", city: "Blachownia" },
    { name: "slambolla", age: 28, gender: "Non-binary", city: "Dori" },
    { name: "vmctagueb", age: 19, gender: "Polygender", city: "Avelinha" },
    {
      name: "wdennettc",
      age: 38,
      gender: "Genderqueer",
      city: "Emiliano Zapata"
    },
    { name: "mnutleyd", age: 24, gender: "Agender", city: "Poitiers" },
    { name: "gshearmane", age: 14, gender: "Genderqueer", city: "Lindavista" },
    { name: "adrustf", age: 20, gender: "Genderqueer", city: "Kisela Voda" },
    { name: "cpollicottg", age: 44, gender: "Genderqueer", city: "Porsgrunn" },
    { name: "aelloyh", age: 8, gender: "Female", city: "Tours" },
    { name: "tsindersoni", age: 7, gender: "Female", city: "Bangan-Oda" },
    {
      name: "bchristauffourj",
      age: 13,
      gender: "Genderfluid",
      city: "Guozhen"
    },
    { name: "mgronowek", age: 33, gender: "Polygender", city: "Terezín" },
    { name: "dstammirsl", age: 37, gender: "Male", city: "Ramiriquí" },
    { name: "srushmerm", age: 7, gender: "Genderfluid", city: "Yushang" },
    { name: "irusten", age: 19, gender: "Non-binary", city: "Laojunpo" },
    { name: "cfantono", age: 23, gender: "Male", city: "San Lorenzo" },
    { name: "rhindhaughp", age: 43, gender: "Bigender", city: "Santa Nino" },
    {
      name: "nchelamq",
      age: 6,
      gender: "Genderqueer",
      city: "Ban Bang Kadi Pathum Thani"
    },
    { name: "aladleyr", age: 40, gender: "Male", city: "Xinji" },
    { name: "aerickssens", age: 33, gender: "Polygender", city: "Peuhaq" },
    { name: "lbrotheridget", age: 19, gender: "Bigender", city: "Sandaotong" },
    { name: "selcomu", age: 15, gender: "Agender", city: "Chynadiyovo" },
    { name: "bcornerv", age: 49, gender: "Non-binary", city: "Pailou" },
    { name: "agilliganw", age: 8, gender: "Agender", city: "Palapye" },
    { name: "lscallonx", age: 27, gender: "Genderfluid", city: "Casa Nova" },
    { name: "rgoodsweny", age: 9, gender: "Female", city: "Bakersfield" },
    { name: "dwesonz", age: 37, gender: "Genderqueer", city: "Fundong" },
    { name: "pubank10", age: 30, gender: "Genderfluid", city: "Pirok" },
    { name: "sjenman11", age: 10, gender: "Genderqueer", city: "Cikendi" },
    { name: "ibruggen12", age: 23, gender: "Female", city: "Skrunda" },
    { name: "dhenighan13", age: 37, gender: "Non-binary", city: "Tugu" },
    { name: "mbury14", age: 27, gender: "Agender", city: "Ōtake" },
    { name: "smote15", age: 31, gender: "Bigender", city: "Dzoraghbyur" },
    { name: "smatchett16", age: 27, gender: "Bigender", city: "Teongtoda" },
    { name: "dprobbing17", age: 40, gender: "Female", city: "Al Khawkhah" },
    { name: "zraggles18", age: 45, gender: "Male", city: "Ödeshög" },
    { name: "laldin19", age: 11, gender: "Agender", city: "Baoquan" },
    { name: "medmunds1a", age: 41, gender: "Genderfluid", city: "Jam" },
    { name: "dgoodlatt1b", age: 47, gender: "Genderqueer", city: "Kedungreja" },
    { name: "zmeneer1c", age: 47, gender: "Agender", city: "Pagatin" },
    { name: "bdrawmer1d", age: 47, gender: "Agender", city: "Sukumo" },
    { name: "askuse1e", age: 26, gender: "Genderfluid", city: "Santo Tomás" },
    { name: "ejesteco1f", age: 20, gender: "Genderfluid", city: "Makadi Bay" },
    { name: "pbeadham1g", age: 16, gender: "Agender", city: "Labuan" },
    { name: "gcowgill1h", age: 15, gender: "Polygender", city: "Prómachoi" },
    { name: "tbricket1i", age: 8, gender: "Agender", city: "Alakak" },
    {
      name: "shenrique1j",
      age: 26,
      gender: "Non-binary",
      city: "Duque de Caxias"
    },
    { name: "imuscroft1k", age: 8, gender: "Non-binary", city: "Sada" },
    { name: "ahanes1l", age: 20, gender: "Female", city: "Duyun" },
    { name: "llarne1m", age: 9, gender: "Agender", city: "Wangmang" },
    { name: "dgrunnill1n", age: 16, gender: "Genderqueer", city: "Mloko" },
    { name: "iterbrugge1o", age: 18, gender: "Agender", city: "Drien Rampak" },
    {
      name: "aflattman1p",
      age: 12,
      gender: "Male",
      city: "Saint-Jean-de-Braye"
    },
    { name: "kkalberer1q", age: 10, gender: "Polygender", city: "Necochea" },
    { name: "fshepland1r", age: 50, gender: "Non-binary", city: "Yongning" },
    { name: "cpassfield1s", age: 23, gender: "Non-binary", city: "Póvoa" },
    { name: "mtallyn1t", age: 46, gender: "Polygender", city: "Ploso Wetan" },
    { name: "kellaman1u", age: 34, gender: "Genderqueer", city: "Maindang" },
    { name: "achape1v", age: 24, gender: "Agender", city: "Boé" },
    {
      name: "rgoodbody1w",
      age: 20,
      gender: "Bigender",
      city: "Qaryat al Qābil"
    },
    { name: "mspracklin1x", age: 38, gender: "Bigender", city: "Rymanów" },
    { name: "eledur1y", age: 13, gender: "Bigender", city: "Apartadó" },
    { name: "badolphine1z", age: 9, gender: "Agender", city: "Jinjiang" },
    {
      name: "anicely20",
      age: 12,
      gender: "Genderqueer",
      city: "Petropavlovskaya"
    },
    { name: "msamme21", age: 25, gender: "Agender", city: "Taramana" },
    { name: "trobecon22", age: 31, gender: "Female", city: "Kaduranca" },
    { name: "sseville23", age: 36, gender: "Agender", city: "Pancol" },
    { name: "drosellini24", age: 29, gender: "Genderqueer", city: "Hongsi" },
    { name: "fgraybeal25", age: 21, gender: "Polygender", city: "Hamilton" },
    { name: "lpettigrew26", age: 8, gender: "Non-binary", city: "Chuzhou" },
    { name: "civanchin27", age: 22, gender: "Female", city: "Caihua" },
    { name: "ssnoxill28", age: 6, gender: "Genderfluid", city: "Los Angeles" },
    { name: "rmonteath29", age: 27, gender: "Polygender", city: "Fuxi" },
    { name: "kitzkovitch2a", age: 48, gender: "Bigender", city: "Kobilje" },
    { name: "abahia2b", age: 44, gender: "Male", city: "Linxi" },
    {
      name: "cburren2c",
      age: 38,
      gender: "Male",
      city: "San Fernando de Atabapo"
    },
    { name: "kdommett2d", age: 29, gender: "Genderfluid", city: "Walce" },
    { name: "jpalser2e", age: 22, gender: "Non-binary", city: "Castelo" },
    {
      name: "ngummie2f",
      age: 14,
      gender: "Polygender",
      city: "Venda do Alcaide"
    },
    {
      name: "bwoolford2g",
      age: 5,
      gender: "Agender",
      city: "Hamburg Bramfeld"
    },
    { name: "vbointon2h", age: 34, gender: "Male", city: "Ambatondrazaka" },
    { name: "tdarrigo2i", age: 8, gender: "Agender", city: "Sekolan" },
    { name: "tdowsing2j", age: 35, gender: "Polygender", city: "Stod" },
    {
      name: "kgrossier2k",
      age: 17,
      gender: "Genderqueer",
      city: "Paragominas"
    },
    { name: "klilleyman2l", age: 31, gender: "Polygender", city: "Veguitas" },
    { name: "oabbot2m", age: 17, gender: "Genderfluid", city: "Shaliu" },
    { name: "fdebruijn2n", age: 12, gender: "Agender", city: "Macun" },
    { name: "bgiovanetti2o", age: 4, gender: "Genderfluid", city: "Chicago" },
    { name: "tmcqueen2p", age: 12, gender: "Polygender", city: "Xinjiebu" },
    { name: "cnisen2q", age: 42, gender: "Non-binary", city: "Huilongshan" },
    { name: "rpoznan2r", age: 10, gender: "Bigender", city: "Ljubuški" }
  ];
  return (
    <div className="App">
      <Navbar />
      <Cards arr={arr} />
    </div>
  );
}
