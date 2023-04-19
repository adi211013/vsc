import { Component } from '@angular/core';
import { motherboard } from './motherboardinterface';
import { processor } from './processorinterface';
import { graphic } from './graphiccardinterface';
import { psu } from './psuinterface';
import { obudowa } from './caseinterface';
import { cooler } from './cpucoolerinterface';
import { ssd } from './driveinterface';
import { ram } from './raminterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  motherboard:Array<motherboard>=
  [{nazwa:"Gigabyte B550 AORUS ELITE V2",chipset:"B550",format:"ATX",socket:"AM4",cena:649},
  {nazwa:"Gigabyte X670 GAMING X AX",chipset:"X670",format:"ATX",socket:"AM5",cena:1449},
  {nazwa:"MSI MAG B550 TOMAHAWK",chipset:"B550 ",format:"ATX",socket:"AM4",cena:659},
  {nazwa:"Gigabyte Z790 GAMING X AX",chipset:"Z790",format:"ATX",socket:"1700",cena:1299}];

  processor:Array<processor>=[
    {nazwa:"AMD Ryzen 5 5600X",socket:"AM4",cena:829},
    {nazwa:"Intel Core i9-13900KF",socket:"1700",cena:2839},
    {nazwa:"Intel Core i5-13600KF",socket:"1700",cena:1499},
    {nazwa:"AMD Ryzen 9 7950X3D",socket:"AM5",cena:3799}
  ];
  graphic:Array<graphic>=
  [
    {nazwa:"MSI GeForce RTX 3070 Ti VENTUS 3X OC 8GB GDDR6X",cena:2929},
    {nazwa:"Gigabyte GeForce RTX 4090 WINDFORCE 24GB GDDR6X",cena:9999},
    {nazwa:"Gainward GeForce RTX 4070 Ti Phoenix 12GB GDDR6X",cena:4249}
  ];
  psu:Array<psu>=
  [
    {nazwa:"Corsair TX750M 750W 80 Plus Gold",format:"ATX",cena:439},
    {nazwa:"ENDORFY Supremo FM5 750W 80 Plus Gold",format:"ATX",cena:499},
    {nazwa:"XPG Pylon 750W 80 Plus Bronze",format:"ATX",cena:439},
  ];
  case:Array<obudowa>=
  [
    {nazwa:"ENDORFY Regnum 400 ARGB",format:"ATX",cena:469},
    {nazwa:"NZXT H7 Flow White&Black",format:"ATX",cena:679},
    {nazwa:"be quiet! Pure Base 500DX Black",format:"ATX",cena:599},
  ];
  cooler:Array<cooler>=
  [
    {nazwa:"ENDORFY Fortis 5 140mm",cena:199},
    {nazwa:"ENDORFY Navis F360 ARGB 3x120mm",cena:609},
    {nazwa:"be quiet! Pure Loop 2 FX 360 3x120mm",cena:729}
  ];
  ssd:Array<ssd>=
  [
    {nazwa:"WD 1TB M.2 PCIe NVMe Blue SN570",cena:259},
    {nazwa:"Lexar 1TB M.2 PCIe NVMe NM620",cena:219},
    {nazwa:"Samsung 1TB M.2 PCIe NVMe 980",cena:319},
  ];
  ram:Array<ram>=
  [
    {nazwa:"Kingston FURY 16GB (2x8GB) 3600MHz CL16 Renegade Black",cena:250,pojemnosc:16},
    {nazwa:"Gigabyte 16GB (2x8GB) 3333Mhz CL18 Aorus RGB",cena:249,pojemnosc:16},
    {nazwa:"ADATA 32GB (2x16GB) 3200MHz Gammix D10",cena:359,pojemnosc:32},
  ]

}
  
