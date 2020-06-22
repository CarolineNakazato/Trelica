function sv(){
var f = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var i = "";

function iniciar() {
	for(i = 0; i <  27; i++){
		f[i]  = 0; 
		console.log("f["+i+"] = "+f[i]);
	  }
}

this.addForca = function(nNo,eixo, sentido, intensidade) {
	if(intensidade<1){return false;}
	if(intensidade>1000000){return false;}
	if(isNaN(intensidade)){return false;}
	console.log(nNo+" "+eixo+" "+sentido+" "+intensidade);
	console.log(f);

	if(nNo == 'A'){
		if(eixo == 'x'){
			if(sentido == 'p'){// esq
				if((f[0]+intensidade)>1000000){return false;}
				f[0] += intensidade;
				
			}else{//dir
				if((f[1]+intensidade)>1000000){return false;}
				f[1] += intensidade;
			}
		}else{ // eixo y
			if(sentido == 'p'){// esq
				if((f[2]+intensidade)>1000000){return false;}
				f[2] += intensidade;
			}else{//dir
				if((f[3]+intensidade)>1000000){return false;}
				f[3] += intensidade;
			}
		}
	}else{
		if(nNo == 'B'){
			if(eixo == 'x'){
				if(sentido == 'p'){// esq
					if((f[4]+intensidade)>1000000){return false;}
					f[4] += intensidade;
				}else{//dir
					if((f[5]+intensidade)>1000000){return false;}
					f[5] += intensidade;
				}
			}else{ // eixo y
				if(sentido == 'p'){// esq
					if((f[6]+intensidade)>1000000){return false;}
					f[6] += intensidade;
				}else{//dir
					if((f[7]+intensidade)>1000000){return false;}
					f[7] += intensidade;
				}
			}
		}else{
			if(nNo == 'C'){//nNo == 'C'
				if(eixo == 'x'){
					if(sentido == 'p'){// esq
						if((f[8]+intensidade)>1000000){return false;}
						f[8] += intensidade;
					}else{//dir
						if((f[9]+intensidade)>1000000){return false;}
						f[9] += intensidade;
					}
				}else{ // eixo y
					if(sentido == 'p'){// esq
						if((f[10]+intensidade)>1000000){return false;}
						f[10] += intensidade;
					}else{//dir
						if((f[11]+intensidade)>1000000){return false;}
						f[11] += intensidade;
					}
				}
			}else{
				if(nNo == 'D'){//nNo == 'D'
					if(eixo == 'x'){
						if(sentido == 'p'){// esq
							if((f[12]+intensidade)>1000000){return false;}
							f[12] += intensidade;
						}else{//dir
							if((f[13]+intensidade)>1000000){return false;}
							f[13] += intensidade;
						}
					}else{ // eixo y
						if(sentido == 'p'){// esq
							if((f[14]+intensidade)>1000000){return false;}
							f[14] += intensidade;
						}else{//dir
							if((f[15]+intensidade)>1000000){return false;}
							f[15] += intensidade;
						}
					}
				}else{
					if(nNo == 'E'){//nNo == 'E'
						if(eixo == 'x'){
							if(sentido == 'p'){// esq
								if((f[16]+intensidade)>1000000){return false;}
								f[16] += intensidade;
							}else{//dir
								if((f[17]+intensidade)>1000000){return false;}
								f[17] += intensidade;
							}
						}else{ // eixo y
							if(sentido == 'p'){// esq
								if((f[18]+intensidade)>1000000){return false;}
								f[18] += intensidade;
							}else{//dir
								if((f[19]+intensidade)>1000000){return false;}
								f[19] += intensidade;
							}
						}
					}else{
						if(nNo == 'F'){//nNo == 'F'
							if(eixo == 'x'){
								if(sentido == 'p'){// esq
									if((f[20]+intensidade)>1000000){return false;}
									f[20] += intensidade;
								}else{//dir
									if((f[21]+intensidade)>1000000){return false;}
									f[21] += intensidade;
								}
							}else{ // eixo y
								if(sentido == 'p'){// esq
									if((f[22]+intensidade)>1000000){return false;}
									f[22] += intensidade;
								}else{//dir
									if((f[23]+intensidade)>1000000){return false;}
									f[23] += intensidade;
								}
							}
						}else{
							if(nNo == 'G'){//nNo == 'G'
								if(eixo == 'x'){
									if(sentido == 'p'){// esq
										if((f[24]+intensidade)>1000000){return false;}
										f[24] += intensidade;
									}else{//dir
										if((f[25]+intensidade)>1000000){return false;}
										f[25] += intensidade;
									}
								}else{ // eixo y
									if(sentido == 'p'){// esq
										if((f[26]+intensidade)>1000000){return false;}
										f[26] += intensidade;
									}else{//dir
										if((f[27]+intensidade)>1000000){return false;}
										f[27] += intensidade;
									}
								}
							}else{
								//prox nós
							}
						}
					}
				}
			}
		}
	}

	console.log(f);
	return true;
}

this.calc = function() {
    var txt = "";
	var AB, AC, BC, Cy, By, Bx;
	
	AB = (f[2] - f[3])/1.73205 -f[1] + f[0];//((f[3]-f[2])/1.73205) - (f[1]-f[0]);
	AC = (f[1] - f[0] + AB/2)*2;//((f[3]-f[2])/1.73205) + (f[1]-f[0]);
	BC = f[8] - f[9]-(AC/2);
	Cy = f[10]-f[11] +((1.73205/2)*AC);
	By = f[6]-f[7] +((1.73205/2)*AB);
	Bx = f[4]-f[5] + BC +(AB/2);
	txt += "AB = " + AB.toFixed(2).replace(".",",") + "N;\n AC = " +
					AC.toFixed(2).replace(".",",") + "N;\n BC = " + 
					BC.toFixed(2).replace(".",",") + "N;\n Cy = " +
					Cy.toFixed(2).replace(".",",") + "N;\n By = " +
					By.toFixed(2).replace(".",",") + "N;\n Bx = " +
					Bx.toFixed(2).replace(".",",") + "N;\n\n";
	txt += "OBS: Quando o sinal da força for negativo, sentido é oposto ao considerado inicialmente.";
	return txt;
 }

 this.calc2 = function() {
    var txt = "";
	var AB, AC, BC, Cy, By, Bx, AD, CD;
	CD = (-f[15]+f[14])*1.1547;
	AD = -f[13]+f[12] -CD/2;
	AB = (f[2] - f[3])/1.73205 -f[1] + f[0]+AD;
	AC = (f[1] - f[0] + AB/2 -AD)*2;
	BC = f[8] - f[9]-(AC/2) + (CD/2);
	Cy = f[10]-f[11] +((1.73205/2)*AC) +((1.73205/2)*CD);
	By = f[6]-f[7] +((1.73205/2)*AB);
	Bx = f[4]-f[5] + BC +(AB/2);
	txt += "AD = "+ AD.toFixed(2).replace(".",",") + "N;\n CD = " +
					CD.toFixed(2).replace(".",",") + "N;\n AB = " +
					AB.toFixed(2).replace(".",",") + "N;\n AC = " +
					AC.toFixed(2).replace(".",",") + "N;\n BC = " + 
					BC.toFixed(2).replace(".",",") + "N;\n Cy = " +
					Cy.toFixed(2).replace(".",",") + "N;\n By = " +
					By.toFixed(2).replace(".",",") + "N;\n Bx = " +
					Bx.toFixed(2).replace(".",",") + "N;\n\n";
	txt += "OBS: Quando o sinal da força for negativo, sentido é oposto ao considerado inicialmente.\n";
	if((AD ==0 )&& (CD == 0))
		txt += "Considere usar template 1, nó D desnecessário.";
	return txt;
 }

 this.calc3 = function() {
    var txt = "";
	var AB, AC, BC, Ey, By, Bx, AD, CD, DE, CE;
	Ey = f[19] - f[18] - f[13]*0.43301 +f[12]*0.43301+f[15]*0.75 - f[14]*0.75 +f[11]/2 -f[10]/2 +f[3]/4 -f[2]/4 +f[0]*0.43301 - f[1]*0.43301;
	By = Ey + f[18] +f[14] +f[2] +f[6] +f[10] - f[19] - f[11] -f[7] - f[3] - f[15];
	Bx = f[12] +f[0] +f[16] +f[8] +f[4] - f[13] - f[1] -f[17] - f[9] - f[5];
	DE = -Ey*1.1547 -f[18]*1.1547 + f[19]*1.1547;
	CE = (-Ey/1.73205 - f[18]/1.73205 +f[19]/1.73205 - f[16] +f[17])*-1;//CE sinal invertido!!!
	BC = Bx -By/1.73205  +f[5] - f[4] - f[7]/1.73205 +f[6]/1.73205 ;
	AB = By*1.1547 +f[7]*1.1547 - f[6]*1.1547;
	AD = AB +f[1] - f[0] +f[3]/1.73205 - f[2]/1.73205;
	CD = -AD +f[12] +f[14]/1.73205 - f[13] - f[15]/1.73205;
	AC = -CD +f[11]*1.1547  - f[10]*1.1547;
	

	txt += "DE = "+ DE.toFixed(2).replace(".",",") + "N;\n CE = " +
					CE.toFixed(2).replace(".",",") + "N;\n AD = " +
					AD.toFixed(2).replace(".",",") + "N;\n CD = " +
					CD.toFixed(2).replace(".",",") + "N;\n AB = " +
					AB.toFixed(2).replace(".",",") + "N;\n AC = " +
					AC.toFixed(2).replace(".",",") + "N;\n BC = " + 
					BC.toFixed(2).replace(".",",") + "N;\n Ey = " +
					Ey.toFixed(2).replace(".",",") + "N;\n By = " +
					By.toFixed(2).replace(".",",") + "N;\n Bx = " +
					Bx.toFixed(2).replace(".",",") + "N;\n\n";
	txt += "OBS: Quando o sinal da força for negativo, sentido é oposto ao considerado inicialmente.\n";
	return txt;
 }

 this.calc4 = function() {
    var txt = "";
	var AB, AC, BC, Cy, Dy, Dx, AD, BD;

	AB = -f[4] -f[8] +f[9] +f[5] +(f[2]/1.73205) -(f[3]/1.73205);
	AC = (f[2] -f[3] -((1.73205/2)*AB))*(2/1.73205);
	BD = f[7] -f[6] -((1.73205/2)*AB);
	AD = f[0] -f[1] +(AC/2) -(AB/2);
	BC = f[8] -f[9] -(AC/2);
	Cy = f[10]-f[11] +((1.73205/2)*AC);
	Dx = f[12]-f[13] +AD;
	Dy = f[15]-f[14] +BD;
	txt += "AD = " + AD.toFixed(2).replace(".",",") + "N;\n BD = " +
					 BD.toFixed(2).replace(".",",") + "N;\n AB = " +
					 AB.toFixed(2).replace(".",",") + "N;\n AC = " +
					 AC.toFixed(2).replace(".",",") + "N;\n BC = " + 
					 BC.toFixed(2).replace(".",",") + "N;\n Cy = " +
					 Cy.toFixed(2).replace(".",",") + "N;\n Dy = " +
					 Dy.toFixed(2).replace(".",",") + "N;\n Dx = " +
					 Dx.toFixed(2).replace(".",",") + "N;\n\n";
	txt += "OBS: Quando o sinal da força for negativo, sentido é oposto ao considerado inicialmente.\n";
	return txt;
 }

 this.calc5 = function() {
    var txt = "";
	var AB, AC, BC, Cy, By, Bx;
	AB = f[2]-f[3] - f[1]+f[0];
	AC = (f[1] - f[0])*1.41421;
	BC = f[8] - f[9] - f[1] + f[0];
	Cy = f[10] - f[11] + f[1] - f[0];
	By = AB + f[6] - f[7];
	Bx = f[4] - f[5] + BC;
	txt += "AB = " +AB.toFixed(2).replace(".",",") + "N;\n AC = " +
					AC.toFixed(2).replace(".",",") + "N;\n BC = " + 
					BC.toFixed(2).replace(".",",") + "N;\n Cy = " +
					Cy.toFixed(2).replace(".",",") + "N;\n By = " +
					By.toFixed(2).replace(".",",") + "N;\n Bx = " +
					Bx.toFixed(2).replace(".",",") + "N;\n\n";
	txt += "OBS: Quando o sinal da força for negativo, sentido é oposto ao considerado inicialmente.\n";
	return txt;
 }
}