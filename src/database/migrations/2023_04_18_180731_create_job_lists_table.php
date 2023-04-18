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
        Schema::create('job_lists', function (Blueprint $table) {
            $table->id();
            $table->string('component_name');
            $table->string('component_code');
            $table->string('part_name');
            $table->enum('job_type', ['scheduled', 'unscheduled']);
            $table->string('job_name');
            $table->boolean('approved_job');
            $table->string('person_in_charge');
            $table->string('status');
            $table->string('level');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_lists');
    }
};
