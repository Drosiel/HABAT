import React from 'react';
import cards from '../../general/cards';
import svg from '../../img/style.svg';

export const Main = () => {
	return (
		<div className='main container'>
			<h1>Notranja in zunanja slikopleskarska dela</h1>

			<h2>
				Slikopleskarstvo HABAT nudi širok spekter slikopleskarskih in
				fasaderskih del.
				<br /> Prepleskamo vam stanovanje ali poslovni prostor, veliko
				izkušenj pa imamo tudi pri večjih in zahtevnejših projektih.
				<br /> Smo resen in odgovoren partner, ki se drži dogovorjenega.
			</h2>

			<div className='main__services services'>
				<div className='services__btn'>
					<div className='services__individuals-btn'>
						Storitve za fizične osebe
					</div>
					<div className='services__company-btn'>
						Storitve za podjetja
					</div>
				</div>

				{/* <div className='services__individuals grid grid-1'>
					{cards.map((card) => (
						<div className='grid__item' key={card.id}>
							<div className='card'>
								<div className='card__left'>
									<div className='card__title'>
										{card.title}
									</div>
									<div className='card__text'>
										{card.description}
									</div>
								</div>

								<div className='card__right'>
									<div className='card__logo'>
										<svg className='card__logo-icon'>
											<use
												href={`${svg}#${card.logo}`}
												fill='#fff'
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					))}
				</div> */}

				<div className='services__company grid'>
					<svg className='services__icon'>
						<use href={`${svg}#logo7`}></use>
					</svg>
					<div className='services__text'>
						<p>
							Podjetje Habat d.o.o. je specializirano na področju
							slikopleskarstva v večjih proizvodnih obratih in
							poslovnih prostorih.
						</p>
						<p>
							S pomočjo sodobne tehnologije in najnovejših orodij
							izvajamo slikopleskarska dela na objektih, kjer je
							potrebna obdelava velikih površin – stenskih ali
							tlakov. Beljenje večjih prostorov izvajamo z
							visokotlačnimi črpalkami za brizganje barve na
							pištolo, s katero lahko prebelimo tudi do 2.000m2
							površin dnevno.
						</p>
					</div>
					<div className='services__more'>
						<div className='services__more-btn btn'>
							Preberite več
						</div>
						<div className='btn__arrow'>
							<svg className='btn__arrow-icon'>
								<use href={`${svg}#arrow`}></use>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
