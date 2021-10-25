--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0 (Debian 14.0-1.pgdg110+1)
-- Dumped by pg_dump version 14.0 (Debian 14.0-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transactions (
    id integer NOT NULL,
    value integer NOT NULL,
    description text NOT NULL,
    date date NOT NULL,
    type text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.transactions OWNER TO postgres;

--
-- Name: transations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.transations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transations_id_seq OWNER TO postgres;

--
-- Name: transations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.transations_id_seq OWNED BY public.transactions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: transactions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions ALTER COLUMN id SET DEFAULT nextval('public.transations_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, token, "userId") FROM stdin;
1	$2b$13$WeVAWQKPXBdPLgzZmX1b4u25KkgIBDUjUmxk2UHIc2QnftKo3Q0Vu	3
2	417ed56f-4880-4ec9-acca-7e6930e19225	4
3	52b088f6-dc95-4f9c-af62-9aef3b832552	4
4	ae1b68d6-1a0a-4484-a074-194c16276aaf	5
5	63ced8a6-b38d-4ef1-b90a-69f0a95ed387	5
6	f6bbe98e-67a5-4f20-bbe1-4fbd3be919ab	5
7	1a96b63d-e180-4acc-8de2-19a4e0953ccd	5
8	0674b329-68d9-4f25-9ce8-ec9ef2fd8e6f	5
9	f6f85e78-0da9-47ce-8983-ed55cbef7385	5
10	d12e8160-5065-4362-ad52-40f7f19a2906	5
11	198e56d8-c6e8-4b4d-9196-468216ca79dc	5
12	bd9c94eb-7c53-4158-8d07-5f66e0ff2b30	5
13	f85cfdb7-a3fa-4598-aa73-7c83fafc0286	5
14	6f7bb3ab-d34b-440c-8cbf-52ad75e73dbc	5
15	cf911fb6-be3a-4cac-b554-afc3fbffad9c	5
16	33521d41-082f-40a5-9326-cafb52b9566f	5
17	22b7fefc-3aa0-457c-a473-c8e4b88725e8	5
18	f25b788d-7dbc-46de-ac7f-97bd4bf8741c	5
19	e8db0dbc-180a-4f86-9989-bd9156e109b5	5
20	1248a642-0cd3-4594-958c-e6bbbe29f7b7	5
21	c5d8947b-1dce-4ade-b776-8067f551720f	5
22	5af4a9fb-b9ad-4d06-b21c-902089ff7bb0	5
23	3e82cbba-75c8-464a-a6af-d392cd2a179e	5
24	8bb99c3b-e0b2-43f8-8f51-2b19d29c8dd8	5
25	0f756f27-fd3e-471e-8996-bde04eec9eb8	5
26	3a73d725-1402-4265-a372-3d60b5da933d	5
27	56a52bdc-b90d-4ad3-a6ec-dda3009d40e6	5
28	48a85924-e2fd-4c24-bb73-7abf7b10c8fe	7
29	00b1abc8-d6e9-489e-a531-3b8340d7fba3	5
30	f1636734-44cc-4232-9c50-8c0ddde168c0	8
31	bc80709e-284c-4324-8056-3c884621280c	8
32	16e9948c-268a-4a84-89d9-0d50a0bbb0fa	8
91	947761d7-c299-4ef4-9c9e-957da3261f18	249
\.


--
-- Data for Name: transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transactions (id, value, description, date, type, "userId") FROM stdin;
1	2500	pizza	2021-10-24	expense	5
2	2000	colar	2021-10-24	income	5
3	2000	colar	2021-10-25	income	5
4	200	venda	2021-10-25	income	8
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password) FROM stdin;
1	thay	thay.csb@gmail.com	{}
2	livin	livin@driven.com	{}
3	thaaay	thay@teste.com	$2b$13$WeVAWQKPXBdPLgzZmX1b4u25KkgIBDUjUmxk2UHIc2QnftKo3Q0Vu
4	livin	livinho@gmail.com	$2b$13$69caLMakTv1iroBzp2.X0eYbAohl1ewPT.lPfwCEAnUkp5eqLRVXa
5	ray	ray@prayana.com	$2b$13$YaKB2AEH6JmvkHCAkit/8OeJvkGmO55DPxZVXUkatWxCXXTq7o9Ze
6	thay	thay.csb@gmail.com	$2b$13$rasW1JCsrd0QbDgcppSQpuGAvC8O4bloRsWsa3v17.MCJmfhZkenC
7	hta	hta@csb.com	$2b$13$JvU9ILOXHkzJ2Pyu.X3DIuqHTHLTBihIeIa/CVx2pWgBHp.zvGw5.
8	thay	coelhothay@gmail.com	$2b$13$qs5lTx9VGZW/BKKzN3Hz5e8I2ZFEFdHEWLBa5uLClseXOMZpKFise
249	bootcamp	bootcamp@respondeai.com	$2b$13$tlBFZQqi4wH4Hsf.6cS1g.fj/PPnPAUqdvI1zb1sD3dfrMImDdVLW
\.


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessions_id_seq', 91, true);


--
-- Name: transations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.transations_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 249, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: transactions transations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transations_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: transactions fk_transations; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT fk_transations FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: sessions sessions; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

