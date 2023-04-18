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
        Schema::create('equipment_datasheets', function (Blueprint $table) {
            $table->id();
            $table->string('datasheet_code');
            $table->string('equipment_brand');
            $table->integer('maintenance_interval');
            $table->string('document');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('equipment_datasheets');
    }
};
