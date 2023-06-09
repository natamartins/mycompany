"use client"
import React, { useEffect } from "react"
import Link from "next/link";
import Image from "next/image"
import * as Scroll from 'react-scroll'
let Button = Scroll.Link
import AOS from 'aos';
import 'aos/dist/aos.css'

import { Instagram, Linkedin, Twitter } from "lucide-react"
import CardList from "@/components/CardList"

// 
import Logo from '../../public/img/logo-company.svg'
import Imagem01 from '../../public/img/img-web.jpg'
import Photo03 from '../../public/img/Rocket.gif'
import Photo04 from '../../public/img/Futuristic.gif'
import Marketing from '../../public/img/tecnolog-removebg-preview.png'
import Arrow from '../../public/img/Arrow.jpg'
import Form from "@/components/Form"
import { MessageCircleIcon } from "lucide-react";



const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        AOS.init({ duration: 1500 })
    }, []);


    return (
        <>
            <header className='container-nav' id="nav">
                <nav className='card_nav'>
                    <Link href='/' onClick={() => window.scrollTo(0, 0)}>
                        <Image src={Logo} alt="" />
                        <div>
                            <h1>NS</h1>
                            <p>Nsoluções</p>
                        </div>
                    </Link>
                    <div className='card_nav-link'>
                        <Button style={{ cursor: 'pointer' }} to="whatwedo" spy={true} smooth={true} offset={50} duration={500} >O que fazemos</Button>
                        <Button style={{ cursor: 'pointer' }} to="createproject" spy={true} smooth={true} offset={50} duration={500} >Começar projeto</Button>
                    </div>
                </nav>
            </header>
            <main className="card_container">
                <section className="card_presentation" id="representation">
                    <div className="card_presentation-boximg" data-aos="fade-right">
                        <Image src={Imagem01} alt="" />
                    </div>
                    <div className="card_presentation-boxcontent" data-aos="fade-down">
                        <h1>Construa já seu e-commece!</h1>
                        <p>
                            Impulsione seu negócio online com NSoluçõs!
                            Somos especializados em criação de landing pages e
                            e-commerce, atendendo tanto pequenos quanto grandes negócios.
                        </p>
                        <div className="card_presentation-arrow">
                            <Image src={Arrow} alt="" />
                        </div>
                    </div>
                </section>
                <section className="card_whatwedo" id="whatwedo">
                    <div className="card_whatwedo-list01">
                        <div className="card_whatwedo-textinfo" data-aos="fade-up-right">
                            <h2>O que <span>fazemos</span> ?</h2>
                            <p>
                                Aumente suas vendas e conquiste clientes com nossas
                                landing pages personalizadas. Nossa equipe de especialistas
                                criará uma página envolvente, otimizada para conversões,
                                que representa sua marca de forma única. Não importa o
                                setor em que você atua, garantimos que sua landing page
                                seja atraente, persuasiva e capaz de direcionar os
                                visitantes para ação.
                            </p>
                            <ul>
                                <CardList text='Prezamos pela melhor experiência do usuário' />
                                <CardList text='  Qualidade de alto nível nas entregas' />
                                <CardList text=' Criação eficiente do produto' />
                                <CardList text='Acesso Web e Mobile' />
                            </ul>
                        </div>
                        <div className="card_whatwedo-img01" data-aos="fade-up-left">
                            <Image src={Photo03} alt='' />
                        </div>
                    </div>
                    <div className="card_whatwedo-list02">
                        <div className="card_whatwedo-img02" data-aos="zoom-in-right">
                            <Image src={Photo04} alt='' />
                        </div>
                        <div className="card_whatwedo-textinfo" data-aos="zoom-out-up">
                            <h2>O que <span>entregamos</span> ?</h2>
                            <p>
                                Através das melhores prática temos  cuidados para garantir a
                                melhor performance e fidelidade ao layout.
                            </p>
                            <ul>
                                <CardList text='e-commecer' />
                                <CardList text='landpage' />
                                <CardList text='Em breve forneceremos mais serviços!' />

                            </ul>
                        </div>

                    </div>
                </section>
                <section className="card_howwedo-bg">
                    <div className="card_howwedo">
                        <h1
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >
                            Nos preocupamos com todos os detalhes na criação
                            de interfaces priorizando a experiência do usuário
                        </h1>
                        <ul>
                            <li data-aos="fade-right">
                                <h2>Estratégia</h2>
                                <p>
                                    Analisamos as necessidades do cliente, aconselhamos
                                    sobre futuras decisões do projeto e identificamos
                                    melhorias do <span>produto</span>.
                                </p>
                            </li>
                            <li data-aos="fade-up">
                                <h2>Design</h2>
                                <p>
                                    Tornamos ideias complexas em interfaces simples e
                                    intuitivas prezando pela experiência do usuário e
                                    visual <span>agradável</span>.
                                </p>
                            </li>
                            <li data-aos="fade-left">
                                <h2>Código</h2>
                                <p>
                                    Através das tecnologias React,
                                    TypeScript, VIte, Next ou Vue, damos vida ao
                                    design levando em consideração
                                    desempenho e <span>qualidade</span>.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="card_marketing">
                    <div className="card_marketing-info" data-aos="fade-up-right">
                        <h1>
                            Já imaginou ter seu produto sendo vendido por
                            todo brasil? sim é possivel.
                        </h1>
                        <p>
                            Com o avanço da tecnologia e a mudança nos hábitos de
                            consumo, o comércio eletrônico se tornou uma das
                            indústrias mais lucrativas e em crescimento. Criar
                            um e-commerce é a maneira perfeita de expandir seus
                            negócios, alcançar um público global e aumentar suas
                            vendas exponencialmente.
                        </p>
                    </div>
                    <div className="card_marketing-img" data-aos="fade-up-left">
                        <Image src={Marketing} alt="" />
                    </div>
                </section>
                <section className="card_promotion">
                    <div className="card_promotion-contant" data-aos="zoom-in">
                        <div className="card_promotion-box">
                            <span className="card_promotion-textdecoration">promoção</span>
                            <h1>Até o final deste mês</h1>
                            <p>Criação de Landpage</p>
                            <div className="infotext">
                                <p>de R$ <span>1900</span> por</p>
                                <p>até 3x de </p>
                                <p>R$400</p>
                            </div>
                            <p>á vista R$ 1.000</p>
                            <button>
                                <MessageCircleIcon />
                                <Link href='mailto:nata.codedev@gmail.com'>
                                    Marcar bate papo
                                </Link>
                            </button>
                        </div>
                    </div>
                    <ul data-aos="zoom-in">
                        <li>
                            Pix
                            <div />
                        </li>
                        <li>
                            Cartão de Crédito
                            <div />
                        </li>
                        <li>
                            Boleto
                            <div />
                        </li>
                    </ul>
                </section>
            </main>
            <footer className="card_footer">
                <section className="card_footer-info" id="createproject">
                    <div className="card_footer-box" data-aos="zoom-in-right">
                        <span className="card_footer-blur01" />
                        <span className="card_footer-blur02" />
                        <h1>Vamos  construir  um  mundo para seu negócio!</h1>
                        <div className="card_footer-infotext">
                            <p>
                                Crie a sua loja virtual dos sonhos com a nossa equipe
                                especializada em serviços de e-commerce para
                                empresas de todos os portes.
                            </p>
                            <p>Comece um projeto conosco</p>
                        </div>
                    </div>
                    <Form />
                </section>
                <div className="card_footer-contact">
                    <p>Natã Martins © Todos os direitos reservados.</p>
                    <div>
                        <Link href='https://www.instagram.com/ns_solucoes2/?theme=dark' target="_blank" >
                            <Instagram />
                        </Link>
                        <Link href='https://www.linkedin.com/in/nsolucoes2023' target="_blank">
                            <Linkedin />
                        </Link>
                        <Twitter />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home