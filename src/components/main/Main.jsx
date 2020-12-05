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
				<div className='services__individuals'>
					Storitve za fizične osebe
				</div>
				<div className='services__company'>Storitve za podjetja</div>
			</div>

			<div className='grid'>
				{cards.map((card) => (
					<div className='grid__item' key={card.id}>
						<div className='card'>
							<div className='card__left'>
								<div className='card__title'>{card.title}</div>
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
			</div>
		</div>
	);
};

export default Main;
