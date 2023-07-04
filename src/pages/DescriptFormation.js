import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams} from 'react-router-dom';
import {BASE_URL,pays} from "../helper"

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ContuctUs from '../components/ContuctUs';

import Comp_Article from '../components/Comp_Article';
export default function DescriptFormation() {
    const [isShown, setIsShown] = useState(1);
	const [nom, setnom] = useState();
	const [photo, setphoto] = useState();
	const [programme,setprogramme]= useState([]);
	const [dureeHeur, setdureeHeur] = useState();

	const [text_1, settext_1] = useState([]);
	const [list, setlist] = useState([]);
	const [text_2, settext_2] = useState([]);
	const [Modules, setModules] = useState([]);
	const [TypeModel, setTypeModel] = useState([]);
	const [duree, setduree] = useState();

	const [prix, setprix] = useState([]);

    const { id  } = useParams();
	localStorage.setItem("IdFormation",id)
const nomCateg=localStorage.getItem("nomCateg")
	useEffect(() => {
   
		const fetchData = async () => {
		  const res = await axios.get(`${BASE_URL}/formation/getFormationById/`+id);
		  setnom(res.data.Formation.nom);
		  settext_1(res.data.Formation.text_1)
		  setlist(res.data.Formation.list)
		  setphoto(res.data.Formation.photo)
          setprogramme(res.data.Formation.programme)
		  setprix(res.data.Formation.prix) 
		  setduree(res.data.Formation.duree)

		  settext_2(res.data.Formation.text_2)
		  setModules(res.data.allModule)
		  setTypeModel(res.data.Formation.typeModelFormation)
         localStorage.setItem("photo",res.data.Formation.photo)

		};
		 fetchData();
	  }, []);
	  useEffect(() => {
		if(duree){
			var s=Number(duree)*7
			setdureeHeur(s)
		}
	  }, [duree]);

return(
    <> 
	<NavBar/>
	{TypeModel=="0"? <div style={{margin:"auto",width:"80%",textAlign:"center"}}>
		         <h2> Page en cours de construction</h2>

	    <a href="/contactUs" className="button-primary text-button16 tracking-16" style={{marginTop:"50px",marginBottom:"50px"}} target="_self">
		<p> 	Besoin d'un</p> <br/>

<p>programme personnalisé</p><br/>

<p> cliquez ici</p> 
                    </a>

		
	</div>:null}
   {TypeModel=="1"? <div className="product-template-default single single-product postid-8959 wp-embed-responsive theme-pyxl-scry woocommerce woocommerce-page woocommerce-js" data-template="base.twig">

	
				
		

					<h1 className="screen-reader-text" href="#content">
				
			</h1>
		
		<main role="main">
				<div className="woocommerce-notices-wrapper"></div>
                <section className="product-outline availability-pending max-w-grid mx-auto px-4 xl:px-0 py-1 md:py-6 bg-light text-dark">
	<div className="border-b-1p border-grey-2">
		<div className="breadcrumbs flex items-center py-4 lg:py-22p text-dark">
		<a href={"/categorie"} className="cursor-pointer  inline-flex items-center text-p14 md:text-p16 -mr-1 first:mr-0 " target="_self">
		Catégories 
		<svg className="pointer-events-none mx-2 h-full w-4 transform -rotate-90 text-dark" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="square"></path>
				</svg>
		</a>
					<a href={"/ListFormation/"+nomCateg} className="cursor-pointer  inline-flex items-center text-p14 md:text-p16 -mr-1 first:mr-0 " target="_self">
                    Formations {nomCateg}

		</a>
					<a href="" className="cursor-pointer  inline-flex items-center text-p14 md:text-p16 -mr-1 first:mr-0 font-semibold -md:hidden" target="_self">
							<svg className="pointer-events-none mx-2 h-full w-4 transform -rotate-90 text-dark" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="square"></path>
				</svg>
                {nom}
		</a>
	</div>
	</div>
		<div className="pt-6 lg:pt-12">
		<div className="flex">
			
						<div className="w-full lg:pl-10">
				
							<div style={{textAlign:"center"}} > 	<h1  >Formations  {nom} </h1> </div>

<br/>
								<div className="md:flex">
								
										<div className="pt-6 -md:w-full md:flex-1 md:pl-16 md:pr-4 lg:pl-0">
						<div className="product_description_short text-grey-4 leading-24p">
						{text_1.map((p)  => (
                           <p>{p.Text_1} <br/> </p>
						))}

						<ul style={{listStyleType:"disc",marginLeft:"40px"}}> 
							{list.map((p)  => (
                           <li>{p.TextList}  </li>
						))}
						</ul>
						<br/>
							{text_2.map((p)  => (
                           <p>{p.Text_2} <br/> </p>
						))}
						</div>
				
						<div className="product-availability__price 1">
							<div data-product="8959" className="product__details -md:mt-10 -md:flex items-center justify-between">
																																</div>
						</div>
						
											</div>
				</div>
			</div>
		</div>
	</div>

		<a id="description" className="h-0 overflow-hidden invisible relative bottom-16"></a>
</section>

<div id="overview" className="relative" style={{top: '-60px;'}}></div>
<section className="product-tabs py-12 px-4 xl:px-0 max-w-grid mx-auto" x-data="{tab_index: &#39;0&#39;}">
		<div className="hidden md:block border-b-2p border-grey-2">
		<div className="mdc-tab-bar -mb-2p" role="tablist">
	<div className="mdc-tab-scroller">
		<div className="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll" style={{marginBottom: "0px"}}>
			<div className="mdc-tab-scroller__scroll-content">
			<button className={isShown==1 ?"mdc-tab px-0 mr-18 flex-grow-0 mdc-tab--active":"mdc-tab px-0 mr-18 flex-grow-0"}   onClick={()=>setIsShown(1)} role="tab" aria-selected="false" tabIndex="1"  id="mdc-tab-2">
						<span className="mdc-tab__content" >
							<span className="mdc-tab__text-label ">Nos formations </span>
						</span>
						{isShown==1	?	<span className="mdc-tab-indicator mdc-tab-indicator--active">
							<span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
						</span> :null}
						<span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
					</button>
						
									
						
									<button className={isShown==3 ?"mdc-tab px-0 mr-18 flex-grow-0 mdc-tab--active":"mdc-tab px-0 mr-18 flex-grow-0"}  onClick={()=>setIsShown(3)} role="tab" aria-selected="false" tabIndex="3"  id="mdc-tab-4">
						<span className="mdc-tab__content">
							<span className="mdc-tab__text-label " >Localiser nos formations</span>
						</span>
						{isShown==3	?	<span className="mdc-tab-indicator mdc-tab-indicator--active">
							<span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
						</span> :null}
						<span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
					</button>
					<button className={isShown==2 ?"mdc-tab px-0 mr-18 flex-grow-0 mdc-tab--active":"mdc-tab px-0 mr-18 flex-grow-0"}   onClick={()=>setIsShown(2)} role="tab" aria-selected="false" tabIndex="2"  id="mdc-tab-3">
						<span className="mdc-tab__content" >
							<span className="mdc-tab__text-label ">Démarche qualité : </span>
						</span>
						{isShown==2	?	<span className="mdc-tab-indicator mdc-tab-indicator--active">
							<span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
						</span> :null}
						<span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
					</button>
							</div>
		</div> 
	</div>
</div>
	</div>
	<div className="">
	
		
            {isShown==1?	
            <div className="opacity-0 h-0  o:opacity-100 o:h-auto divVisible"    >
                <div className="containerboxModel1" >
		   {Modules.map((p)  => (
			    
				    <div className="boxModul"> 
					<a href={"/DescriptModule/"+p._id}> <h2>  {p.TitreModule} </h2></a>
 </div>
				 
						))}
	     
      
        
           </div>
     
			</div>:null}
		
		{isShown==2?	<div style={{width:"70%",paddingTop:"20px"}} className="divVisible">
							<p>Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1).</p>
				<img src='../img/logo/qualiopi-logo.png'/> 
				<p>Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue.</p>
			</div>:null}

		
{isShown==3?	<div className="opacity-0 h-0  o:opacity-100 o:h-auto divVisible " >
									<div className="md:flex flex-wrap md:pt-2 flex-row-reverse justify-end">
									<div className="-md:first:mt-6 mt-8 w-full md:w-1/2">
												{pays.map( (p) => (
     <a className="mt-3 text-link16 md:text-link18 font-semibold text-blue ease-200 hover:text-blue-2 flex" href={"/descritionFormation/"+nom+"/"+p} >{nom} à {p} </a>
    ))}

															</div>
																	</div>
				
			</div>:null}

              <div className="invVisivle"> 
			<div>
				<h3> NOS FORMATIONS</h3>
				<hr/>
			<div className="opacity-0 h-0  o:opacity-100 o:h-auto"   >
                <div className="containerboxModel1">
					
		   {Modules.map((p)  => (
			   
				    <div className="boxModul"> 
					<a href={"/DescriptModule/"+p._id}> <h2> {p.TitreModule} </h2></a>
 </div>
				 
						))}
	     
      
        
           </div>
     
			</div>


			</div>
			<br/>
			<h3> LOCALISER NOS FORMATIONS</h3>
				<hr/>
			<div  style={{marginLeft:"3%",marginTop:"40px"}} >
												{pays.map( (p) => (< div >
     <a  href={"/plusInformation/"+nom+"/"+p} >{nom} à {p} </a>  <br/> </div>
    ))}

				
			</div>
			<br/>
			<h3>DÉMARCHE QUALITÉ :</h3>
				<hr/>
			<div style={{textAlign:"center",marginTop:"40px"}} >
		
							<p>Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1).</p>
				<img src='../img/logo/qualiopi-logo.png' style={{margin:"auto"}}/> 
				<p>Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue.</p>
			</div>
		
			</div>
			</div>
</section>



		</main>


<Comp_Article/>



</div>	:null}
{TypeModel=="2"?  
 <div className="product-template-default single single-product postid-8959 wp-embed-responsive theme-pyxl-scry woocommerce woocommerce-page woocommerce-js" data-template="base.twig">
<h1 className="screen-reader-text" href="#content">
				
			</h1>
		
		<main role="main">
				<div className="woocommerce-notices-wrapper"></div>
                <section className="product-outline availability-pending max-w-grid mx-auto px-4 xl:px-0 py-1 md:py-6 bg-light text-dark">
	<div className="border-b-1p border-grey-2">
		<div className="breadcrumbs flex items-center py-4 lg:py-22p text-dark">
		<a href={"/categorie"} className="cursor-pointer  inline-flex items-center text-p14 md:text-p16 -mr-1 first:mr-0 " target="_self">
		Catégories 
		<svg className="pointer-events-none mx-2 h-full w-4 transform -rotate-90 text-dark" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="square"></path>
				</svg>
		</a>
					<a href={"/ListFormation/"+nomCateg} className="cursor-pointer  inline-flex items-center text-p14 md:text-p16 -mr-1 first:mr-0 " target="_self">
                    Formations {nomCateg}

		</a>
					<a href="" className="cursor-pointer  inline-flex items-center text-p14 md:text-p16 -mr-1 first:mr-0 font-semibold -md:hidden" target="_self">
							<svg className="pointer-events-none mx-2 h-full w-4 transform -rotate-90 text-dark" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="square"></path>
				</svg>
                {nom}
		</a>

	</div>
	</div>
		<div className="pt-6 lg:pt-12">
		<div className="flex">
						<div className="-lg:hidden w-1/2 flex select-none" x-data="{selectedPhoto: &#39;0&#39;}">
			
				<div className="relative bg-grey-1 w-496p h-496p overflow-hidden">
					<div className="rounded-full bg-light absolute z-20 top-4 right-4 h-8 w-8 p-2 pointer-events-none hover:hidden">
						<svg className="fill-none stroke-current text-dark w-full h-full">
							<use  href="#icon-search"></use>
						</svg>
					</div>
											<a data-fancybox="gallery" href="./img/SW-Software-Image-Standard-1024x1024.png" className="product-image-zoom block w-full h-full"   style={{position: "relative", overflow: "hidden"}}>
							<img src={photo} alt={photo} className="p-5 lozad w-full h-full object-contain bg-grey-1" data-loaded="true"/>
						<img role="presentation" src={photo} alt={photo} className="zoomImg" style={{position: "absolute", top: "-118.452px", left: "-185.005px", opacity: "0", width: "768px", height: "768px", border: "none",maxWidth: "none", maxHeight: "none"}}/></a>
														</div>
			</div>
						<div className="w-full lg:pl-10">
								<div className="w-full lg:pb-6 lg:border-b-1p border-grey-2">
					<a href="/categorie" className="text-o14 tracking-07 md:text-p16 md:tracking-08 text-grey-3 font-semibold uppercase">
                    Formation 
					</a>
					<h1 className="product__title mt-1 lg:mt-2 text-h3Sm md:text-h3">
					{nom} 

					</h1>

									</div>
								<div className="md:flex">
										<div className="main-carousel lg:hidden md:w-328p mt-5 pb-16 -md:border-b-1p border-grey-2 flickity-enabled is-draggable" tabIndex="0">
													
													
													
													
											<div className="flickity-viewport" style={{height: "328px", touchAction: "pan-y",margin:"auto"}}><div className="flickity-slider" style={{left: "0px"}}>
								<img src={photo} alt={photo}  className="lozad object-cover m-auto w-full h-full bg-grey-1" style={{margin:"auto"}} />
							</div></div>
							</div>
										<div className="pt-6 -md:w-full md:flex-1 md:pl-16 md:pr-4 lg:pl-0">
						<div className="product_description_short text-grey-4 leading-24p">
						{text_1.map((p)  => (
                           <p>{p.Text_1} <br/> </p>
						))}
						</div>
					
						<div className="product-availability__price 1">
							<div data-product="8959" className="product__details -md:mt-10 -md:flex items-center justify-between">
																																</div>
						</div>
						
											</div>
				</div>
			</div>
		</div>
	</div>

		<a id="description" className="h-0 overflow-hidden invisible relative bottom-16"></a>
</section>

<div id="overview" className="relative" style={{top: '-60px;'}}></div>
<section className="product-tabs py-12 px-4 xl:px-0 max-w-grid mx-auto" x-data="{tab_index: &#39;0&#39;}">
		<div className="hidden md:block border-b-2p border-grey-2">
		<div className="mdc-tab-bar -mb-2p" role="tablist">
	<div className="mdc-tab-scroller">
		<div className="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll" style={{marginBottom: "0px"}}>
			<div className="mdc-tab-scroller__scroll-content">
									<button   className={isShown==1?"mdc-tab px-0 mr-18 flex-grow-0 mdc-tab--active":"mdc-tab px-0 mr-18 flex-grow-0"} onClick={()=>setIsShown(1)} role="tab" aria-selected="true" tabIndex="0"  id="mdc-tab-1">
						<span className="mdc-tab__content" >
							<button  className="mdc-tab__text-label ">Programme</button>
						</span>
						{isShown==1	?	<span className="mdc-tab-indicator mdc-tab-indicator--active">
							<span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
						</span> :null}
						<span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
					</button>
									<button className={isShown==2 ?"mdc-tab px-0 mr-18 flex-grow-0 mdc-tab--active":"mdc-tab px-0 mr-18 flex-grow-0"}  onClick={()=>setIsShown(2)} role="tab" aria-selected="false" tabIndex="1"  id="mdc-tab-2">
						<span className="mdc-tab__content" >
							<span className="mdc-tab__text-label ">Condition de la formation</span>
						</span>
						{isShown==2	?	<span className="mdc-tab-indicator mdc-tab-indicator--active">
							<span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
						</span> :null}
						<span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
					</button>
									<button className={isShown==3 ?"mdc-tab px-0 mr-18 flex-grow-0 mdc-tab--active":"mdc-tab px-0 mr-18 flex-grow-0"}  onClick={()=>setIsShown(3)} role="tab" aria-selected="false" tabIndex="2"  id="mdc-tab-3">
						<span className="mdc-tab__content" >
							<span className="mdc-tab__text-label ">Démarche qualité :</span>
						</span>
						{isShown==3	?	<span className="mdc-tab-indicator mdc-tab-indicator--active">
							<span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
						</span> :null}
						<span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
					</button>
				
							
							</div>
		</div>
	</div>
</div>
	</div>
	<div className="">
		{isShown==1?	
			<div className="opacity-0 h-0  o:opacity-100 o:h-auto divVisible" >
									<div className="product_description   md:flex-row pb-6">
								<br/>
					
							
         {programme?programme.map((item) => 
      <> 
         <h4> {item.titre} </h4>
         <ul > {item.list.length>0?
		 item.list.map((l) => 
          <li>{l.name}</li>
         ):null}</ul>
         
         </>       
            ):null}
			
   
					</div>
				
			</div>:null}
		
            {isShown==2?	
            <div className="opacity-0 h-0  o:opacity-100 o:h-auto divVisible"   >
                <div className="pt-8 md:pt-10 md:pr-8" >
                   <h4> Durée :</h4>
				   <p>{duree} jours soit {dureeHeur} heures</p>
				   <br/>
				   <h4> Prix :</h4>
				   <p> A partir de {prix} euros HT <br/>
					prix dégressif en fonction du nombre de participants</p>
					<br/> <h4>Objectifs de la formation Catia initiation :</h4>
				 <p>Acquérir les bases essentielles du logiciel CATIA pour créer des modèles paramétriques en 3D, des assemblages, des plans côtés et des dossiers techniques. </p>
				 <br/> <h4> Public :</h4>
				 <p> Ingénieur, technicien, dessinateur-projeteur de bureau d’étude.<br/>

Salariés, étudiants, demandeurs d’emploi …</p>
<br/><h4> Prérequis :</h4>
<p> Etre à l’aise dans l’environnement Windows. Une connaissance des points suivants est souhaitée : dessin technique, conception mécanique.</p>
<br/><h4>Moyens pédagogiques :</h4>
<p> Alternance de contenus théoriques et cas pratiques afin de permettre aux participants de s’approprier progressivement les outils et méthodes.</p>
					</div>
			</div>:null}
		
			{isShown==3?	<div className="divVisible" style={{width:"70%",paddingTop:"20px"}} >
							<p>Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1).</p>
				<img src='../img/logo/qualiopi-logo.png'/> 
				<p>Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue.</p>
			</div>:null}

		
{isShown==4?	
<div className="opacity-0 h-0  o:opacity-100 o:h-auto divVisible " >
									<div className="md:flex flex-wrap md:pt-2 flex-row-reverse justify-end">
									<div className="-md:first:mt-6 mt-8 w-full md:w-1/2">
									{pays.map( (p) => (
     <a className="mt-3 text-link16 md:text-link18 font-semibold text-blue ease-200 hover:text-blue-2 flex" href={"/descritionFormation/"+nom+"/"+p} >{nom} à {p} </a>
    ))}
															</div>
																	</div>
				
			</div>:null}
			<div className="invVisivle"> 
              <h2> Programme</h2>
			  <hr className="w-20 h-0 border-t-2 border-blue-2"/>
			<div className="opacity-0 h-0  o:opacity-100 o:h-auto " >
									<div className="product_description   md:flex-row pb-6">
								<br/>
					
							
         {programme.map((item) => 
      <> 
         <h4> {item.titre} </h4>

         <ul > {item.list.map((l) => 
          <li>{l.name}</li>
         )}</ul>
         
         </>       
            )}
			
   
					</div>
				
			</div> 
			<br/>
			<h2> Condition de la formation</h2>
			<hr className="w-20 h-0 border-t-2 border-blue-2"/>
			<div className="opacity-0 h-0  o:opacity-100 o:h-auto "   >
                <div className="pt-8 md:pt-10 md:pr-8" >
                   <h4> Durée :</h4>
				   <p>{duree} jours soit {dureeHeur} heures</p>
				   <br/>
				   <h4> Prix :</h4>
				   <p> A partir de {prix} euros HT <br/>
					prix dégressif en fonction du nombre de participants</p>
					<br/> <h4>Objectifs de la formation Catia initiation :</h4>
				 <p>Acquérir les bases essentielles du logiciel CATIA pour créer des modèles paramétriques en 3D, des assemblages, des plans côtés et des dossiers techniques. </p>
				 <br/> <h4> Public :</h4>
				 <p> Ingénieur, technicien, dessinateur-projeteur de bureau d’étude.<br/>

Salariés, étudiants, demandeurs d’emploi …</p>
<br/><h4> Prérequis :</h4>
<p> Etre à l’aise dans l’environnement Windows. Une connaissance des points suivants est souhaitée : dessin technique, conception mécanique.</p>
<br/><h4>Moyens pédagogiques :</h4>
<p> Alternance de contenus théoriques et cas pratiques afin de permettre aux participants de s’approprier progressivement les outils et méthodes.</p>
					</div>
			</div>
			<br/><br/>
			<h2> DÉMARCHE QUALITÉ :</h2>
			<hr className="w-20 h-0 border-t-2 border-blue-2"/>
			<div style={{textAlign:"center",marginTop:"40px"}} >
							<p>Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1).</p>
				<img src='../img/logo/qualiopi-logo.png' style={{margin:"auto"}}/> 
				<p>Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue.</p>
			</div>
			</div>

			</div>
</section>



<Comp_Article/>

		</main>






</div>:null}

<ContuctUs/>
<Footer/>
    </>
)



}