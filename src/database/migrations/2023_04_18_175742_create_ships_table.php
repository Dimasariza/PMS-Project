<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ships', function (Blueprint $table) {
            $table->id();
            $table->string('imo_number');
            $table->string('vessel_name');
            $table->string('flag');
            $table->string('picture');
            $table->integer('dwt');
            $table->integer('gross_tonage');
            $table->integer('year')->nullable();
            $table->string('callsign');
            $table->float('LOA');
            $table->float('breadth');
            $table->string('vessel_type_generic');
            $table->string('vessel_type_detailed');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ships');
    }
};
