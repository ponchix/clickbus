<?php

namespace App\Controller;

use App\Entity\Conversion;
use App\Form\ConversionType;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Component\BrowserKit\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class ConversionController extends AbstractController
{
    #[Route('/conversion', name: 'app_conversion')]
    public function index(): Response
    {
        $form = $this->createForm(ConversionType::class);
        return $this->render('conversion/index.html.twig', [
            'controller_name' => 'ConversionController',
            'Form' => $form->createView()
        ]);
    }

    #[Route('/nueva', name: 'nueva_conversion')]
    public function nuevaConversion(EntityManagerInterface $em, Request $request): Response
    {
        $amount=$request->request->get('amount');
        $from_currency=$request->request->get('from_currency');
        $to_currency=$request->request->get('to_currency');
        $new_amount=$request->request->get('new_amount');


        $conversion = new Conversion();
        $conversion->setAmount($amount);
        $conversion->setFromCurrency($from_currency);
        $conversion->setCreatedAt(new \DateTimeImmutable("now",new \DateTimeZone('America/Mexico_City')));
        $conversion->setToCurrency($to_currency);
        $conversion->setNewAmount($new_amount);

        $em->persist($conversion);
        $em->flush();

        return $this->json(["success"=>200,"message"=>"Registro Exitoso"]);
    }
}
