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
        Schema::create('stock_equipments', function (Blueprint $table) {
            $table->id();
            $table->string('equipment_code');
            $table->string('equipment_name');
            $table->string('stock_category');
            $table->string('status_part');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_equipments');
    }
};
