<?php

namespace App\Controller;

use App\Entity\Conversion;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HistorialController extends AbstractController
{
    #[Route('/historial', name: 'historial_divisas')]
    public function index(EntityManagerInterface $em): Response
    {
        $conversiones=$em->getRepository(Conversion::class)->findAll();
        return $this->render('historial/index.html.twig', [
            'controller_name' => 'HistorialController',
            'conversiones'=>$conversiones
        ]);
    }
}
