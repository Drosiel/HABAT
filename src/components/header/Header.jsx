import React from 'react';
import svg from '../../img/style.svg';

export const Header = () => {
	return (
		<div className='header'>
			<div className='header__top'>
				<div className='header__top-inner container'>
					<div className='header__logo logo'>
						<svg className='logo__icon'>
							<use href={`${svg}#mainLogo`} />
						</svg>
					</div>

					<div className='header__flag flag'>
						<svg className='flag__icon'>
							<use href={`${svg}#flag`}></use>
						</svg>
						<span className='flag__text'>
							Notranja in zunanja slikopleskarska dela že več kot
							<p>40 let</p>
						</span>
					</div>

					<nav className='header__menu menu'>
						<ul className='menu__list'>
							<li className='menu__item'>
								<a href='#' className='menu__link'>
									Storitve
								</a>
							</li>
							<li className='menu__item'>
								<a href='#' className='menu__link'>
									Reference
								</a>
							</li>
							<li className='menu__item'>
								<a href='#' className='menu__link'>
									Koristne informacije
								</a>
							</li>
							<li className='menu__item'>
								<a href='#' className='menu__link'>
									O podjetju
								</a>
							</li>
							<li className='menu__item'>
								<a href='#' className='menu__link'>
									Kontakt
								</a>
							</li>
						</ul>
					</nav>
					<div className='header__contacts contacts'>
						<a className='contacts__tel' href='tel:041 625 519'>
							041 625 519
						</a>
						<a
							className='contacts__email'
							href='mailto:info@slikopleskarstvo-habat.si'
						>
							info@slikopleskarstvo-habat.si
						</a>

						<div className='contacts__request'>
							Pošlji povpraševanje
						</div>
					</div>
				</div>
			</div>

			<div className='header__slider slider'>slider</div>

			<div className='header__bottom'>
				<div className='header__bottom-inner container content'>
					<div className='content__item'>
						<div className='content__text'>42 let</div>
						<div>uspešnega obstoja družinskega podjetja</div>
					</div>
					<div className='content__item'>
						<div className='content__mark'>
							<svg className='content__icon'>
								<use href={`${svg}#mark`}></use>
							</svg>
						</div>
						Dosledno se držimo rokov in delovnega načrta
					</div>
					<div className='content__item'>
						<div className='content__mark'>
							<svg className='content__icon'>
								<use href={`${svg}#mark`}></use>
							</svg>
						</div>
						Delamo z obveznim upoštevanjem standardov
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
