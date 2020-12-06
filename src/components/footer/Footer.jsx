import React from 'react';
import svg from '../../img/style.svg';
import works from '../../general/works';

export const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__inner container'>
				<div className='footer__top'>
					<div className='footer__logo'>
						<svg className='footer__icon'>
							<use href={`${svg}#footerLogo`}></use>
						</svg>
						<svg className='footer__icon2'>
							<use href={`${svg}#footerLogo2`}></use>
						</svg>
					</div>
				</div>

				<div className='footer__bottom'>
					<div className='footer__left'>
						<div className='footer_works works'>
							<div className='works__title'>Storitve</div>

							<ul className='works__list'>
								{works.map((work, index) => (
									<li className='works__item' key={index}>
										<a className='works__link' href='#'>
											{work.name}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className='footer__guide'>
							<a className='footer__guide-item' href='#'>
								© Slikopleskarstvo Habat 1978-2020
							</a>
							<div className='footer__guide-item'>
								<a href='#'>Pogoji uporabe piškotkov</a>
								<a href='#'>
									Pravilnik o varstvu osebnih podatkov
								</a>
							</div>
						</div>
					</div>

					<div className='footer__right'>
						<div className='contacts footer__contacts'>
							<div className='contacts__title'>Kontakt</div>
							<div className='contacts__address'>
								Habat d.o.o. Ulica pod gozdom 14 1236 Trzin
								Slovenija
							</div>
							<a className='contacts__tel' href='tel:041 625 519'>
								041 625 519
							</a>
							<a
								className='contacts__email'
								href='mailto:info@slikopleskarstvo-habat.si'
							>
								info@slikopleskarstvo-habat.si
							</a>
							<div className='contacts__FB'>
								<svg className='contacts__FB-icon'>
									<use href={`${svg}#facebook`}></use>
								</svg>
								Obiščite nas tudi na Facebooku
							</div>
						</div>
						<div className='footer__about'>
							<div>Izdelava spletne strani in podpora</div>
							<svg className='footer__about-icon'>
								<use href={`${svg}#radian`}></use>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
