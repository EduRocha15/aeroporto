'use client'

import Pagina from "@/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";

export default function Page() {

    const route = useRouter()

    function salvar(dados){
        const empresas = JSON.parse(localStorage.getItem('empresas')) || []
        empresas.push(dados)
        localStorage.setItem('empresas', JSON.stringify(empresas))
        return route.push('/empresas')
    }

    return (
        <Pagina titulo="Empresa">

            <Formik
                initialValues={{nome: '', logo: '', site: ''}}
                onSubmit={values=>salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="nome" 
                                value={values.nome}
                                onChange={handleChange('nome')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="logo">
                            <Form.Label>Logo</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="logo"
                                value={values.logo}
                                onChange={handleChange('logo')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="site">
                            <Form.Label>Site</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="site"
                                value={values.site}
                                onChange={handleChange('site')}
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/empresas"
                                className="btn btn-danger ms-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    )
}